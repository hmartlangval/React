import React from 'react'

class MyComp extends React.Component{

    doUnload = ()=> ()=>{ console.log('unmounting.. here we go')}


    componentDidMount(){
        console.log('Mounted');
        window.addEventListener('beforeunload', this.doUnload)
    }
    componentWillUnmount(){
        console.log("UNMOUNTING")
    }

    render(){
        return <h1>Counting downwards {this.props.Time}</h1>
    }
}

export default MyComp;