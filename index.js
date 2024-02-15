        // JavaScript для перенаправлення користувача після завершення завантаження
        window.addEventListener('load', function() {
            // Після завершення завантаження ви можете перенаправити користувача на іншу сторінку.
            // В цьому прикладі користувач буде перенаправлений на "main.html" через 6 секунди.
            setTimeout(function() {
                window.location.href = 'main.html';
            }, 6000); // 6000 мс = 6 секунди
        });