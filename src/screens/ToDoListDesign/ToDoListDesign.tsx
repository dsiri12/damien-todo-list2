import React from 'react'
import './style.css'

export const ToDoListDesign = (): JSX.Element => {
  return (
    <div className='to-do-list-design'>
      <div className='to-do-list-container'>
        <header className='header'>
          <div className='title-notes'>
            <div className='text-wrapper'>To Do</div>
            <div className='div'>User feedback tomorrow!</div>
          </div>
          <div className='emoji'>
            <div className='text-wrapper-2'>🌤️</div>
          </div>
        </header>
        <div className='divider' />
        <div className='to-do-complete'>
          <img
            className='image'
            alt='Image'
            src='/img/image-1.png'
          />
          <div className='text-wrapper-3'>Finish designs</div>
        </div>
        <div className='to-do-incomplete'>
          <img
            className='image'
            alt='Image'
            src='/img/image-2.png'
          />
          <div className='text-wrapper-4'>Make responsive on Figma</div>
        </div>
        <div className='divider' />
        <input
          className='add-to-do'
          placeholder='add to do here...'
        />
      </div>
    </div>
  )
}
