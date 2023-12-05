describe('login user', () => {
  it('cannot log a user in with wrong credentials', () => {
    cy.visit('http://localhost:5501');
    cy.get('input#registerEmail').type('ThoJen84480@stud.noroff.no');
    cy.get('input#registerPassword').type('!Yzems224');
    cy.get(
      'form#registerForm.modal-content button.btn.btn-outline-success',
    ).click();
    cy.wait(1000);
    cy.get('input#loginEmail').type('ThoJen84480@stud.noroff.no');
    cy.get('input#loginPassword').type('!Yzems225');
  });
  it('should trigger an alert with a message', () => {
    cy.get('form#loginForm.modal-content button.btn.btn-success').click();

    cy.on('window:alert', (text) => {
      expect(text).to.contains(
        'Either your username was not found or your password is incorrect',
      );
    });
  });
});
