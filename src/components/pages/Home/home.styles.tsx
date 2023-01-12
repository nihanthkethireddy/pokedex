import { css } from 'glamor'

let homeStyles = css({
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    height: '100%'
})

let placeholderStyles = css({
    width: '15%',
    height: '100%'
})

let cardStyles = css({
    justifyContent: 'space-evenly',
    display: 'flex',
    flexWrap: 'wrap',
    width: '70%',
    ' a': {
        textDecoration: 'none !important'
    }
})

let recentSearchStyles = css({
    width: '15%',
    height: '100%'
})

let bodyStyles = css({
    display: 'flex',
    flexWrap: 'wrap'
})

export { homeStyles, bodyStyles, placeholderStyles, recentSearchStyles, cardStyles }