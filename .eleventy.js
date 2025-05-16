module.exports = function (eleventyConfig) {
    // Копирование папки с изображениями в выходную директорию
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addCollection("article", function (collectionApi) {
        return collectionApi.getFilteredByGlob("articles/*.md").sort((a, b) => {
            return (b.data.order || 0) - (a.data.order || 0);
        });
    });

    return {
        dir: {
            input: ".",         // Директория входных файлов
            includes: "_includes", // Директория для шаблонов
            data: "_data",         // Директория для глобальных данных
            output: "_site"        // Директория для выходных файлов
        },
        templateFormats: ["md", "njk", "html"], // Обрабатываемые форматы файлов
        markdownTemplateEngine: "njk", // Шаблонизатор для Markdown
        htmlTemplateEngine: "njk"      // Шаблонизатор для HTML
    };
};