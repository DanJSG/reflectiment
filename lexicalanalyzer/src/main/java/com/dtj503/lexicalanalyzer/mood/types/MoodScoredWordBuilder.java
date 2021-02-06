package com.dtj503.lexicalanalyzer.mood.types;

import com.dtj503.lexicalanalyzer.common.sql.SQLEntityBuilder;

import java.sql.ResultSet;

public class MoodScoredWordBuilder implements SQLEntityBuilder<MoodScoredWord> {

    @Override
    public MoodScoredWord fromResultSet(ResultSet sqlResults) {
        try {
            String word = sqlResults.getString("word");
            String emotion = sqlResults.getString("emotion");
            float score = sqlResults.getFloat("score");
            return new MoodScoredWord(word, null, emotion, score);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}