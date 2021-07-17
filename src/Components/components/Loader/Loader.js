import React from 'react'
import './Loader.css'

export default function Loader({isLoading , children}) {
    if(isLoading) return (<div className="lds-dual-ring"> </div>)
    return children;
}