jQuery(function($){
            
         	//Use Japanese
            $.extend( $.fn.dataTable.defaults, { 
                language: {
                    url: "http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Japanese.json"
                } 
            });
         	//　上に書く必要がある
            $("#foo-table").DataTable({
                // Kennsuu Kirikae Mukou
                lengthChange: true,
                // Sarch Kinou Mukou
                searching: true,
                // Sort
                ordering: true,
                // Info
                info: true,
                // Paging
                paging: true
            });
        });