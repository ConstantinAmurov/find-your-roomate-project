import React from 'react';
import {
	FaBehance,
	FaFacebook,
	FaLinkedin,
	FaTwitter,
	FaSketch,
	FaHome,
	FaUserFriends,
	FaFolderOpen,FaPlus

} from 'react-icons/fa';

export const userLinks = [
	{
		id: 1,
		url: '/',
		text: 'dashboard',
		icon: <FaHome className="w-5 h-5" />,
	},
	{
		id: 2,
		url: '/matches',
		text: 'My matches',
		icon: <FaUserFriends className="w-5 h-5" />,
		sublinks: [
			{
				id: 3,
				url: "/requested-matches",
				text: "Requested Matches",
				icon: <FaUserFriends className="w-3 h-3" />,

			}, {
				id: 4,
				url: "/incoming-matches",
				text: "Incoming Matches",
				icon: <FaUserFriends className="w-3 h-3" />,

			}
		]
	},
	{
		id: 3,
		url: '/rooms',
		text: 'Find a room',
		icon: <FaFolderOpen className="w-5 h-5" />,
	},

];

export const adminLinks = [
	{
		id: 1,
		url: '/',
		text: 'dashboard',
		icon: <FaHome className="w-5 h-5" />,
		sublinks: [
			{
				id: 2,
				url: "/add-property",
				text: "Add Property",
				icon: <FaPlus className="w-3 h-3" />,

			},
		]
	},
	{
		id: 3,
		url: '/requests',
		text: 'Requests',
		icon: <FaUserFriends className="w-5 h-5" />,
	},

];




export const social = [
	{
		id: 1,
		url: 'https://www.twitter.com',
		icon: <FaFacebook />,
	},
	{
		id: 2,
		url: 'https://www.twitter.com',
		icon: <FaTwitter />,
	},
	{
		id: 3,
		url: 'https://www.twitter.com',
		icon: <FaLinkedin />,
	},
	{
		id: 4,
		url: 'https://www.twitter.com',
		icon: <FaBehance />,
	},
	{
		id: 5,
		url: 'https://www.twitter.com',
		icon: <FaSketch />,
	},
];
