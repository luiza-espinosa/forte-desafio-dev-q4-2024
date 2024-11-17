"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listBookLoans = void 0;
const listBookLoans = (request, response) => {
    const lendings = [
        {
            id: "cf93597d",
            name: "Código Limpo (Clean Code)",
            author: "Robert Cecil Martin",
            publicationYear: "2012",
        }
    ];
    response.json(lendings);
};
exports.listBookLoans = listBookLoans;
//# sourceMappingURL=listBookLoans.js.map