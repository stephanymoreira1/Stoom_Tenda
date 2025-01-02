/// <reference types="cypress" />

const { should } = require("chai");

describe("validar as funcionalidades corretas", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Adicionar dois produtos ao carrinho- um produto Tenda e um produto de um seller", () => {
    cy.get(".ButtonClose > .svgIcon").click();
    cy.get('.disclaimer-container > [data-cy="btn-"]').click();
    cy.contains("Comprar por departamento").trigger("mouseover", {
      force: true,
    });
    cy.contains("Marketplace").trigger("mouseover", { force: true });
    cy.contains("Produtos Seller").click({ force: true });
    cy.get("#shipping-cep").type("06433030");
    cy.wait(3000);
    cy.get(
      ":nth-child(1) > .card-content > .card-information-component"
    ).click();
    cy.get(".list-branches > :nth-child(1)").click();
    cy.get(".PickupDeliveryContainer > .svgIcon").click();
    cy.get(
      ':nth-child(1) > .showcase-card-content > .menu-actions-icons > .ButtonBuyComponent > [data-cy="btn-"]'
    )
      .scrollIntoView({ force: true })
      .should("be.visible")
      .click({ force: true });
    cy.wait(3000);
    cy.get(
      ':nth-child(4) > .CarouselProductsContainer > .slick-slider > .slick-list > .slick-track > .slick-current > :nth-child(1) > .ProductCardShowcase > .showcase-card-content > .menu-actions-icons > .ButtonBuyComponent > [data-cy="btn-"]'
    )
      .scrollIntoView({ force: true })
      .should("be.visible")
      .click({ force: true });
    cy.wait(3000);
    cy.get(
      ':nth-child(5) > .CarouselProductsContainer > .slick-slider > .slick-list > .slick-track > [data-index="2"] > :nth-child(1) > .ProductCardShowcase > .showcase-card-content > .menu-actions-icons > .ButtonBuyComponent > [data-cy="btn-"]'
    )
      .should("be.visible")
      .click({ force: true });
    cy.wait(3000);
  });

  it("Testar a funcionalidade de adicionar e remover unidades desses dois itens no carrinho", () => {
    cy.get(".ButtonClose > .svgIcon").click();
    cy.get('.disclaimer-container > [data-cy="btn-"]').click();
    cy.contains("Comprar por departamento").trigger("mouseover", {
      force: true,
    });
    cy.contains("Marketplace").trigger("mouseover", { force: true });
    cy.contains("Produtos Seller").click({ force: true });
    cy.get("#shipping-cep").type("06433030");
    cy.wait(4000);
    cy.get(
      ":nth-child(1) > .card-content > .card-information-component"
    ).click();
    cy.get(".list-branches > :nth-child(1)").click();
    cy.get(".PickupDeliveryContainer > .svgIcon").click();
    cy.get(
      ':nth-child(1) > .showcase-card-content > .menu-actions-icons > .ButtonBuyComponent > [data-cy="btn-"]'
    )
      .scrollIntoView({ force: true })
      .should("be.visible")
      .click({ force: true });
    cy.get(
      ':nth-child(4) > .CarouselProductsContainer > .slick-slider > .slick-list > .slick-track > .slick-current > :nth-child(1) > .ProductCardShowcase > .showcase-card-content > .menu-actions-icons > .ButtonBuyComponent > [data-cy="btn-"]'
    )
      .scrollIntoView({ force: true })
      .should("be.visible")
      .click({ force: true });
    cy.wait(3000);
    cy.get(
      ':nth-child(5) > .CarouselProductsContainer > .slick-slider > .slick-list > .slick-track > [data-index="2"] > :nth-child(1) > .ProductCardShowcase > .showcase-card-content > .menu-actions-icons > .ButtonBuyComponent > [data-cy="btn-"]'
    )
      .should("be.visible")
      .click({ force: true });
    cy.wait(3000);
    cy.get(
      '[data-index="1"] > :nth-child(1) > .ProductCardShowcase > .showcase-card-content > .menu-actions-icons > .box-quantity > .btn-action-decrement'
    ).click();
    cy.wait(3000);
    cy.get(
      '[data-index="2"] > :nth-child(1) > .ProductCardShowcase > .showcase-card-content > .menu-actions-icons > .box-quantity > .btn-action-decrement'
    ).click();
    cy.wait(3000);
    cy.scrollTo("right");
    cy.contains("Seu carrinho ainda está vazio.").should("be.visible");
  });

  it("Executar o processo de finalização do carrinho de compras, gerando um pedido via boleto e outro utilizando um cartão de testes", () => {
    cy.get(".ButtonClose > .svgIcon").click();
    cy.get('.disclaimer-container > [data-cy="btn-"]').click();
    cy.contains("Comprar por departamento").trigger("mouseover", {
      force: true,
    });
    cy.contains("Marketplace").trigger("mouseover", { force: true });
    cy.contains("Produtos Seller").click({ force: true });
    cy.get("#shipping-cep").type("06433030");
    cy.wait(3000);
    cy.get(
      ":nth-child(1) > .card-content > .card-information-component"
    ).click();
    cy.get(".list-branches > :nth-child(1)").click();
    cy.get(".PickupDeliveryContainer > .svgIcon").click();
    cy.get(
      ':nth-child(1) > .showcase-card-content > .menu-actions-icons > .ButtonBuyComponent > [data-cy="btn-"]'
    )
      .scrollIntoView({ force: true })
      .should("be.visible")
      .click({ force: true });
    cy.get(
      ':nth-child(4) > .CarouselProductsContainer > .slick-slider > .slick-list > .slick-track > .slick-current > :nth-child(1) > .ProductCardShowcase > .showcase-card-content > .menu-actions-icons > .ButtonBuyComponent > [data-cy="btn-"]'
    )
      .scrollIntoView({ force: true })
      .should("be.visible")
      .click({ force: true });
    cy.wait(3000);
    cy.get(
      ':nth-child(5) > .CarouselProductsContainer > .slick-slider > .slick-list > .slick-track > [data-index="2"] > :nth-child(1) > .ProductCardShowcase > .showcase-card-content > .menu-actions-icons > .ButtonBuyComponent > [data-cy="btn-"]'
    )
      .should("be.visible")
      .click({ force: true });
    cy.wait(3000);
    cy.scrollTo("right");
    cy.get('.cartblock-bottom > [data-cy="btn-"]').click({ force: true });
    cy.scrollTo("right");
    cy.get(".resume-buttons > .btn").click({ force: true });
    cy.get("#login").type("xexadon520@myweblaw.com");
    cy.get("#password").type("Stephany@1234");
    cy.get('.row_action_login > [data-cy="btn-"]').click();
    cy.scrollTo("right");
    cy.wait(3000);
    cy.get(".resume-buttons > .btn").click();
    cy.wait(3000);
    cy.get(":nth-child(3) > .btn-delivery").click();
    cy.get(".card-information-component > .content");
    cy.get(".resume-buttons > .btn");
    cy.get(":nth-child(3) > .btn-delivery").click({ force: true });
    cy.get(".ListAddresses > :nth-child(2) > .content").click();
    cy.contains("Entrega indisponível para o CEP informado.").should(
      "be.visible"
    );
    cy.scrollTo("right");
    cy.wait(3000);
    cy.get(".resume-buttons > .btn").click();
    cy.wait(3000);
    cy.get(":nth-child(3) > .btn-delivery").click();
    cy.get(".ListAddresses > :nth-child(1) > .content").click();
    cy.contains("Entrega indisponível para o CEP informado.").should(
      "be.visible"
    );
    cy.wait(3000);
    //por não deixar continuar para realização da compra validei com mais de 1 cep para tentar efetivar a compra, mas sem sucesso
  });
});
