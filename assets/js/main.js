
 $(".article-block").hide();

$(function() {
 
        $(".btn-search").on("click", function() {
            $(".search-block").css("top", "-17px");
            $(".article-block").show();
            $(".article").css("padding", "10px");

            var searchData = $(".wiki-input-search").val();
            if(!searchData){
                if (confirm("You did not enter query! \n You want the choice query to be random ?")) {
                    window.location = "https://en.wikipedia.org/wiki/Special:Random";
                }
                throw new Error("Did not enter query");
            }

            var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+searchData+"&callback=?";
            $.ajax({
                type: "Get",
                url: url,
                async: false,
                dataType: 'json',
                success: function(data) {
                    //Article 1
                    $(".article-1 h3").text(data[1][0]);
                    $(".article-1 p").text(data[2][0]);
                    $(".article-1 a").attr("href", data[3][0]);
                    //Article 2
                    $(".article-2 h3").text(data[1][1]);
                    $(".article-2 p").text(data[2][1]);
                    $(".article-2 a").attr("href", data[3][1]);
                    //Article 3
                    $(".article-3 h3").text(data[1][2]);
                    $(".article-3 p").text(data[2][2]);
                    $(".article-3 a").attr("href", data[3][2]);

                }
                    })
            });

        });
