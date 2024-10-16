import React from 'react'
import HomeRounded from '@mui/icons-material/HomeRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded'
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'

const Sidebar = () => {
  return (
    <div className='text-gray-500 p-5 text-sm border border-gray-800'>
      <div className='space-y-4'>
        <button className='flex items-center space-x-2 hover:text-white'>
            <HomeRounded className='h-5 w-5'/>
            <p>Home</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
            <SearchRoundedIcon className='h-5 w-5'/>
            <p>Search</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
            <LibraryMusicRoundedIcon className='h-5 w-5'/>
            <p>Library</p>
        </button>
        <hr className='border-t-[0.1px] border-gray-800'></hr>
        <button className='flex items-center space-x-2 hover:text-white'>
            <PlaylistAddRoundedIcon className='h-5 w-5'/>
            <p>Create Playlist</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
            <FavoriteRoundedIcon className='h-5 w-5'/>
            <p>Liked Songs</p>
        </button>
        <hr className='border-t-[0.1px] border-gray-800'></hr>
      </div>
    </div>
  )
}

export default Sidebar
