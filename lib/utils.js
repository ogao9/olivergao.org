import client from './sanityClient'
import imageUrlBuilder from '@sanity/image-url'

export function urlFor (source) {
	return imageUrlBuilder(client).image(source)
}

export function prettyDate(dateString){
    const date = new Date(dateString);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()
}