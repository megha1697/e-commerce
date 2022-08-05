import app from './app'
import * as net from 'net'

/**
 * Start Express server.
 */
const server = app.listen('5000')

server.on('error', (err: any) => {
    console.log('Could not start server', err)
    process.exit()
})

server.on('listening', () => {
    const addr = server.address() as net.AddressInfo
    console.log(`Listening on port:${addr.port}`)
    console.log('Press CTRL-C to stop\n')
})

export default server
