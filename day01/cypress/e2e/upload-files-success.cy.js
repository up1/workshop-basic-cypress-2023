describe('Upload files', () => {
    beforeEach(() => {
        cy.visit('http://nervgh.github.io/pages/angular-file-upload/examples/simple/')
        cy.get('body > div > div.row > div.col-md-3 > input[type=file]:nth-child(5)').should('be.visible')
    })

    it('Success with upload 3 files', () => {
        // Upload 3 files
        const uploadElement = cy.get('input[type=file]:nth-child(5)')
        cy.fixture('uploads/file_01.txt').as('file_01')
        cy.fixture('uploads/file_02.txt').as('file_02')
        cy.fixture('uploads/file_03.txt').as('file_03')
        uploadElement.selectFile('@file_01')
        uploadElement.selectFile('@file_02')
        uploadElement.selectFile('@file_03')

        // Check information of 3 files
        cy.get('tr:nth-child(1) > td:nth-child(1)').should('include.text', 'file_01.txt')
        cy.get('tr:nth-child(2) > td:nth-child(1)').should('include.text', 'file_02.txt')
        cy.get('tr:nth-child(3) > td:nth-child(1)').should('include.text', 'file_03.txt')

        // Check status of upload button
        cy.get('tr:nth-child(1) > td:nth-child(5) > button.btn.btn-success.btn-xs').should('be.visible').should('be.enabled')
        cy.get('tr:nth-child(2) > td:nth-child(5) > button.btn.btn-success.btn-xs').should('be.visible').should('be.enabled')
        cy.get('tr:nth-child(3) > td:nth-child(5) > button.btn.btn-success.btn-xs').should('be.visible').should('be.enabled')

        // Check upload status
        cy.get('body > div > div.row > div.col-md-9 > p').should('include.text', 'Queue length: 3')
        cy.get('div[style=""]').should('be.visible')

        // Uploaded 1st file
        cy.get('tr:nth-child(1) > td:nth-child(5) > button.btn.btn-success.btn-xs').click()
        cy.get('div[style="width: 33%;"]').should('be.visible')

        // Uploaded 2nd file
        cy.get('tr:nth-child(2) > td:nth-child(5) > button.btn.btn-success.btn-xs').click()
        cy.get('div[style="width: 67%;"]').should('be.visible')

        // Uploaded 3rd file
        cy.get('tr:nth-child(3) > td:nth-child(5) > button.btn.btn-success.btn-xs').click()
        cy.get('div[style="width: 100%;"]').should('be.visible')

        // Check status of buttons
        cy.get('div > button.btn.btn-success.btn-s').should('be.visible').should('be.disabled')
        cy.get('div > button.btn.btn-warning.btn-s').should('be.visible').should('be.disabled')
        cy.get('div > button.btn.btn-danger.btn-s').should('be.visible').should('be.enabled')
    })

})