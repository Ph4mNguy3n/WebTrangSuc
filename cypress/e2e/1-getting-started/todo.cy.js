describe('Kiểm thử hiển thị trang chủ', () => {
  it('Trang chủ hiển thị đúng', () => {
    cy.visit('http://localhost:3000'); // Mở trang chủ
    cy.get('h1').should('contain', 'Chào mừng'); // Kiểm tra tiêu đề
    cy.get('.product-item').should('have.length.greaterThan', 0); // Kiểm tra có sản phẩm hiển thị
  });
});
