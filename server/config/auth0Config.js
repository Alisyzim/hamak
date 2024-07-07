import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "dev-bnag72hdxz0u12qv.eu.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck