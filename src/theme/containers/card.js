import React from 'react'
import { Card_Contaianer_Style } from '../../constants/Index'
import { Link } from 'react-router-dom'

function Card({ width, height, title, titleStyle, icon, href, className }) {
    console.log(width, height)
    return (
        <Link to={href} className={`${Card_Contaianer_Style} ${className}  ${width} ${height}  `}>
            {icon}<span className={`${titleStyle}`}>{title}</span>
        </Link>
    )
}

export default Card