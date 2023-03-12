import React from 'react'
import readingTime from 'reading-time'

const ReadingTime = ({blocks}) => {
    const content = blocks.map(block => block.children).join(' ')
    const stats = readingTime(content);
    const minutes = Math.ceil(stats.minutes);
    console.log('minutes', minutes)
    return (
        <span className='text-gray-500 text-sm'>
        {minutes} min{minutes === 1 ? '' : 's'} read
        </span>
    );

}

export default ReadingTime