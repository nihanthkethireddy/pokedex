import { css } from 'glamor'

let pokemonStyles = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    ' > a': {
        textDecoration: 'none',
        color: 'white',
        width: '100%'
    }
})

let cardStyles = css({
    display: 'flex',
    flexDirection: 'column',
    margin: '15px',
    minWidth: '170px',
    minHeight: '170px',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.5)',
    ' div': {
        margin: 'auto'
    },
    ' p': {
        margin: '5px',
        textAlign: 'center',
        color: 'white'
    }
})

let evolutionStyles = css({
    display: 'flex',
    width: '60%',
    height: '100%',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    ' a': {
        textDecoration: 'none'
    }
})
let statStyles = css({
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
})
let spritesStyles = css({
    display: 'flex',
    width: '60%',
    height: '100%',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
})

let imgStyles = css({
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
})

export { pokemonStyles, evolutionStyles, statStyles, spritesStyles, cardStyles, imgStyles }