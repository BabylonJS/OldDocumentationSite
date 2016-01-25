var TypeScript = require('typescript-services');

module.exports = {
    describe: function (enuM) {
        var enumElements = enuM.enumElements.members;

        var enumTable = 'Key | Value\n' +
            '---|---\n';

        for (var index in enumElements) {
            var element = enumElements[index];

            enumTable += element.propertyName.text() + ' | ' + element.equalsValueClause.value._text + '\n';
        }

        return enumTable;
    }
};
