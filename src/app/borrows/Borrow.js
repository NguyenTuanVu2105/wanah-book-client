import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Borrow = () => {
    let {id} = useParams();
    const [users, setUsers] = useState(null)
    const [reviews, setReviews] = useState([])
    const _fetchData = async () => {
        
    }
    useEffect(() => {
      
    }, [])

    return (
        <div>

        </div>    
    )
}

export default Borrow