export default {
    name: 'avatar-component',
    props: {
        content: {
            type: String,
            required: true
        },
        dimension: {
            type: Number,
            required: true
        },
        fontSize: {
            type: Number,
            required: false,
            default: 16
        }
    }
}