import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

const Head = styled.div`
    text-align: center;
`

export default () => (
    <Layout>
        <Head>
            <h1>Create React App</h1>
            <p>Welcome in this web this is simple build by create-react-app</p>
        </Head>
    </Layout>
)