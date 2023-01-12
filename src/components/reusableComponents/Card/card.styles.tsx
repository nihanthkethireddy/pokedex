import { css } from 'glamor'

let cardStyles = css({
    height: '220px',
    display: 'flex',
    flexDirection: 'column',
    width: '250px',
    margin: '15px',
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

export { cardStyles }