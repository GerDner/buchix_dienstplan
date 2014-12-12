import DS from 'ember-data';
export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin,{
    primaryKey: '_id',
    attrs: {
        weeks: {embedded: 'always'}
    },
    normalize: function(type, hash, prop) {
        this.normalizeId(hash);
        this.normalizeAttributes(type, hash);
        this.normalizeRelationships(type, hash);

        this.normalizeUsingDeclaredMapping(type, hash);

        if (this.normalizeHash && this.normalizeHash[prop]) {
            this.normalizeHash[prop](hash);
        }

        this.applyTransforms(type, hash);
        return hash;
    },
});
