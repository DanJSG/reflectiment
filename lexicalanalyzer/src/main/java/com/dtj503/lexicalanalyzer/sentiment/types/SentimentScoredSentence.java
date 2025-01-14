package com.dtj503.lexicalanalyzer.sentiment.types;

import com.dtj503.lexicalanalyzer.common.types.ScoredSentence;
import com.dtj503.lexicalanalyzer.common.types.ScoredWord;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import java.util.List;

/**
 * Class representing a sentence with a calculated sentiment score.
 *
 * @author Dan Jackson (dtj503@york.ac.uk)
 */
@JsonPropertyOrder({"score", "label"})
public class SentimentScoredSentence extends ScoredSentence<ScoredWord> {

    @JsonProperty
    private final String label;

    public SentimentScoredSentence(String text, List<ScoredWord> words, float score) {
        super(text, words, score);
        this.label = pickLabel(score);
    }

    public String getLabel() {
        return label;
    }

    private static String pickLabel(float score) {
        if(score > -0.33 && score < 0.33) {
            return "neutral";
        } else if(score > 0) {
            return "positive";
        } else {
            return "negative";
        }
    }

}
