import React, {useEffect, useState} from 'react';
import axios from 'axios'

const Fib = () => {
    const [seenIndexes, setSeenIndexes] = useState([])
    const [values, setValues] = useState({})
    const [index, setIndex] = useState('')

    useEffect(() => {
        fetchValues()
        fetchIndexes()
    }, [])
    const fetchValues = () => {
        axios.get('/api/values/current').then(re => {
            setValues(re.data)
        })

    }
    const fetchIndexes = () => {
        axios.get('/api/values/all').then(re => {
            setSeenIndexes(re.data)
        })
    }
    const renderSeenIndexes = () => {
        return seenIndexes.map(({number}) => number).join(', ')
    }
    const renderValues = () => {
        const entries = [];
        for (let key in values) {
            entries.push(
                <div key={key}>
                    For index {key} I calculated {values[key]}
                </div>
            )
        }
        return entries;
    }
    const handleSubmit = async (e) => {
      e.preventDefault()
        await axios.post('/api/values',{
            index
        })
        fetchValues()
        setIndex('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter your index</label>
                <input type="text" value={index} onChange={(e) => {
                    setIndex(e.target.value)
                }}/>
                <button>Submit</button>
            </form>
            <h3>Indexes I have seen</h3>
            {
                renderSeenIndexes()
            }
            <h3>Calculate Values</h3>
            {
                renderValues()
            }
        </div>
    );
};

export default Fib;
