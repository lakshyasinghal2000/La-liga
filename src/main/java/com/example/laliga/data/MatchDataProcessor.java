package com.example.laliga.data;

import java.time.LocalDate;

import com.example.laliga.model.Match;

import org.springframework.batch.item.ItemProcessor;

public class MatchDataProcessor implements ItemProcessor<MatchInput, Match> {

    @Override
    public Match process(final MatchInput matchInput) throws Exception {

        Match match = new Match();
        match.setId(Long.parseLong(matchInput.getId()));
        match.setSeason(matchInput.getSeason());
        match.setDate(LocalDate.parse(matchInput.getDate()));
        match.setTeam1(matchInput.getTeam1());
        match.setTeam2(matchInput.getTeam2());
        match.setFTHG(matchInput.getFthg());
        match.setFTAG(matchInput.getFtag());

        String matchwinner;
        String matchlosser;
        if ("D".equals(matchInput.getFtr())) {
            matchwinner = "Draw";
            matchlosser = "Draw";
        } else if ("H".equals(matchInput.getFtr())) {
            matchwinner = matchInput.getTeam1();
            matchlosser = matchInput.getTeam2();
        } else {
            matchwinner = matchInput.getTeam2();
            matchlosser = matchInput.getTeam1();
        }
        match.setFTR(matchwinner);
        match.setFTR2(matchlosser);
        return match;
    }

}
