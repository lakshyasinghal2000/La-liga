package com.example.laliga.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Match {

    @Id
    private long id;
    private String season;
    private LocalDate date;
    private String team1;
    private String team2;
    private String FTHG;
    private String FTAG;
    private String FTR;
    private String FTR2;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public String getSeason() {
        return season;
    }

    public void setSeason(String season) {
        this.season = season;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getFTHG() {
        return FTHG;
    }

    public void setFTHG(String fTHG) {
        FTHG = fTHG;
    }

    public String getFTAG() {
        return FTAG;
    }

    public void setFTAG(String fTAG) {
        FTAG = fTAG;
    }

    public String getFTR() {
        return FTR;
    }

    public void setFTR(String fTR) {
        FTR = fTR;
    }

    public String getTeam1() {
        return team1;
    }

    public void setTeam1(String team1) {
        this.team1 = team1;
    }

    public String getTeam2() {
        return team2;
    }

    public void setTeam2(String team2) {
        this.team2 = team2;
    }

    public String getFTR2() {
        return FTR2;
    }

    public void setFTR2(String fTR2) {
        FTR2 = fTR2;
    }

}
