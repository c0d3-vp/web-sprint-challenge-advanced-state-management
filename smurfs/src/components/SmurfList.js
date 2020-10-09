import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchSmurfs, postSmurfs} from '../actions'

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        errors: state.errors
    };
  };

function SmurfList(props){
    useEffect(()=>{
        props.fetchSmurfs()
        
    }, [])

    useEffect(()=>{
        props.postSmurfs()
        
    }, [])
    return(
        <div>
        {console.log(props.smurfs)}
    {props.smurfs.length > 0 ? props.smurfs.map(smurf => {return <h3>Name: <span>{smurf.name}</span> ⦾ Age: <span>{smurf.age}</span>  ⦾ Height: <span>{smurf.height}</span></h3>}) : null}</div>
    )
}

export default connect(mapStateToProps, {fetchSmurfs, postSmurfs})(SmurfList)