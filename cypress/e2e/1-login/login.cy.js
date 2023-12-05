describe('login user', () => {
  it('can log a user in', () => {
    cy.visit('http://localhost:5501');
    cy.get('input#registerEmail').type('ThoJen84480@stud.noroff.no');
    cy.get('input#registerPassword').type('!Yzems224');
    cy.get(
      'form#registerForm.modal-content button.btn.btn-outline-success',
    ).click();
    cy.wait(1000);
    cy.get('input#loginEmail').type('ThoJen84480@stud.noroff.no');
    cy.get('input#loginPassword').type('!Yzems224');
    cy.get('form#loginForm.modal-content button.btn.btn-success').click();
  });
});
