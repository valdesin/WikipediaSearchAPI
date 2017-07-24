$(function() {

        $(".btn-search").on("click", function() {
            $(".search-block").css("top", "-17px");

            var searchData = $(".wiki-input-search").val();
            var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+searchData+"&callback=?";
            $.ajax({
                type: "Get",
                url: url,
                async: false,
                dataType: 'json',
                success: function(data) {
                    console.log(data[1][0]);
                    console.log(data[2][0]);
                    console.log(data[3][0]);
                }
                    });
            });

        });
