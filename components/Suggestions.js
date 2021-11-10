import { useEffect, useState } from 'react'
import faker from "faker"

function Suggestions() {
    const [suggestions, setSuggestions] = useState([])
    useEffect(() => {
        const suggestions = [...Array(6)].map((_, i) => (
            { ...faker.helpers.contextualCard(), id: i }
        ))
        setSuggestions(suggestions)
    }, [])
    return (
        <div className='mt-4 ml-10'>
            <div className='flex justify-between text-sm mb-4'>
                <h3 className='text-sm font-bold text-gray-400'>Suggestion for you</h3>
                <button className='text-gray-600 font-semibold'>See All</button>
            </div>
            {suggestions.map((profile) => (
                <div key={profile.id} className='flex items-center justify-between mt-3'>
                    <img src={profile.avatar} className='w-10 h-10 rounded-full border p-{2px}' />
                    <div className='flex-1 ml-4'>
                        <h2 className='font-semibold text-sm'>{profile.username}</h2>
                        <h3 className='text-sm text-gray-400'>Works at {profile.company.name}</h3>
                    </div>
                    <button className='text-xs text-blue-400 font-bold'>Follow</button>
                </div>
            ))}
        </div>
    )
}

export default Suggestions
