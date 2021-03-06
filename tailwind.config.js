module.exports = {
    theme: {
        fontFamily: {
            display: ['"Jost*"'],
        },
        extend: {
            spacing: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
                '128': '32rem',
            },
            zIndex: {
                '-1': '-1',
                '-2': '-2',
                '-3': '-3',
                '-4': '-4',
                '-5': '-5',
            },
            colors: {
                main: "#B562E7",
            },
            fill: theme => ({
                ...theme('colors'),
            })
        },
        variants: {
            fill: ['responsive', 'hover', 'focus']
        },
        plugins: []
    }
}
