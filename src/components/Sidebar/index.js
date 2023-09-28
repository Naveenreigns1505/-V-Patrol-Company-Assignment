import React from 'react'
import CreateEventButton from '../CreateEventButton'
import SmallCalendar from '../SmallCalendar'
import Labels from '../Labels'

const Sidebar = () => {
  return (
    <div>
      <aside className='border p-5 w-64'>
        <CreateEventButton />
        <SmallCalendar />
        <Labels />
      </aside>
    </div>
  )
}

export default Sidebar