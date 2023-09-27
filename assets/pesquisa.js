document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('search-input');
    var searchResults = document.getElementById('search-results');
    var typingTimer;
    var doneTypingInterval = 1000; // 1 segundo (1000ms)

    searchResults.style.display = 'none';

    function performSearch() {
        var searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm.length >= 1) {
            var results = simulateSearch(searchTerm);

            if (results.length > 0) {
                searchResults.innerHTML = '';
                results.forEach(function(result) {
                    var listItem = document.createElement('li');
                    listItem.innerHTML = '<h3>' + result.nome + '</h3><p>' + result.descricao + '</p>';
                    searchResults.appendChild(listItem);
                });
                searchResults.style.display = 'block';
            } else {
                searchResults.innerHTML = '<p>Nenhum resultado encontrado.</p>';
                searchResults.style.display = 'block';
            }
        } else {
            searchResults.innerHTML = ''; // Limpa os resultados quando o campo está vazio
            searchResults.style.display = 'none';
        }
    }

    searchInput.addEventListener('input', function() {
        clearTimeout(typingTimer);
        if (searchInput.value) {
            typingTimer = setTimeout(doneTyping, doneTypingInterval);
        } else {
            performSearch(); // Se o campo estiver vazio, limpa os resultados imediatamente
        }
    });

    function doneTyping() {
        performSearch();
    }

    function simulateSearch(query) {
        var catalogoItens = [
            { nome: "Jogo da Velha", descricao: "Jogo de tabuleiro clássico para dois jogadores." },
            { nome: "Jogo de Cartas", descricao: "Jogo de cartas popular para diversão em grupo." },
            { nome: "Jogo de Tabuleiro", descricao: "Diferentes tipos de jogos de tabuleiro disponíveis." },
            { nome: "Jogo de Futebol", descricao: "Partidas de futebol para diversos campeonatos." }
            // Adicione mais itens conforme necessário
        ];

        var results = catalogoItens.filter(function(item) {
            return item.nome.toLowerCase().includes(query);
        });

        return results;
    }
});
