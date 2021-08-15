/// <reference types="cypress" />

import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import PageHeader from '../../src/components/PageHeader'
import { mount } from 'cypress-react-unit-test'

context('PageHeader component', () => {
    const baseCss = '/__root/src/assets/styles/global.css'
    const indexCSS = '/__rood/src/components/PageHeader/styles.css'
    it('Deve ser renderizado com sucesso', () => {
        const title = "Que incrível que você quer dar aulas."
        const description = "O primeiro passo é preencher esse formulário de inscrição."

        mount(
            <Router>
                <PageHeader
                    title={title}
                    description={description}
                />
             </Router>
             ,
             {
                 stylesheets: [baseCss, indexCSS]
             }
        )
        // find e children     
        cy.get('.page-header').as('header')    
        cy.get('@header').find('strong').as('title')
        cy.get('@header').find('p').as('description')              

        cy.get('@title').should('have.text', title)
        cy.get('@description').should('have.text', description)

        cy.get('@header').then(($elemento) => {
            expect($elemento.css('background-color')).to.be.equal('rgb(130, 87, 229)')
        })

        // responsividade

    });
});