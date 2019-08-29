import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';

import WithSpinner from './../../components/with-spinner/with-spinner'

import CollectionsOverview from './../../components/collections-overview/collections-overview.jsx'
import CollectionPage from './../collection/collection'

import { firestore, convertCollectionsSnapshotToMap } from './../../firebase/firebase.utils'

import { updateCollections } from './../../redux/shop/shop.actions';

const mapDispatchToProps = (dispatch) => {
  return {
    updateCollections : (collectionsMap) => dispatch(updateCollections(collectionsMap)),
  }
}
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
	constructor() {
		super()
		this.state = {
			loading: true
		}
	}
	unsubscribeFromSnapshot = null

	componentDidMount() {
		const {updateCollections} = this.props
	    const collectionRef = firestore.collection('collections')
	    // the GET way
	    collectionRef.get().then( snapShot => {
	    	const collectionMap = convertCollectionsSnapshotToMap(snapShot)
	    	updateCollections(collectionMap);
	    	this.setState({ loading: false});
	    })
	    // better way since it is an observable an updates online
	    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot( async snapShot => {
	    // 	const collectionMap = convertCollectionsSnapshotToMap(snapShot)
	    // 	updateCollections(collectionMap);
	    // 	this.setState({ loading: false});
	    // })
	  }

	  componentWillUnmount() {
	    this.unsubscribeFromSnapshot()
	  }

	
	render(){
		const { loading } = this.state
		const { match } = this.props
		return (
		<div className = 'shop-page'>
			<Route exact path = {`${match.path}`} render = {(props)  => <CollectionsOverviewWithSpinner isLoading = {loading} {...props}/> }/>
			<Route path = {`${match.path}/:collectionId`} render = {(props)  => <CollectionPageWithSpinner isLoading = {loading} {...props}/> }/>
		</div> 			
		)
	}
}

export default connect(null, mapDispatchToProps)(ShopPage);
