package com.dtj503.gateway.api.types.lexical;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReflectionModifier {

    @JsonProperty
    private float judgementAppreciationModifier;

    @JsonProperty
    private float affectModifier;

    @JsonProperty
    private float combinedAppraisalModifier;

    public float getCombinedAppraisalModifier() {
        return combinedAppraisalModifier;
    }
}