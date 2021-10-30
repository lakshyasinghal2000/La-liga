package com.example.laliga.data;

public class MatchInput {

    private String id;
    private String season;
    private String date;
    private String team1;
    private String team2;
    private String fthg;
    private String ftag;
    private String ftr;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSeason() {
        return season;
    }

    public void setSeason(String season) {
        this.season = season;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getFthg() {
        return fthg;
    }

    public void setFthg(String fthg) {
        this.fthg = fthg;
    }

    public String getFtag() {
        return ftag;
    }

    public void setFtag(String ftag) {
        this.ftag = ftag;
    }

    public String getFtr() {
        return ftr;
    }

    public void setFtr(String ftr) {
        this.ftr = ftr;
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

}
