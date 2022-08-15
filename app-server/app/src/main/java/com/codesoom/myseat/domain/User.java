package com.codesoom.myseat.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * 회원 엔티티
 */
@Entity
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue
    @Column(name="user_id")
    private Long id;

    private String name;
    
    private String email;
    
    private String password;

    @OneToOne
    @JoinColumn(name = "token_id")
    private Token token;

    @OneToMany(mappedBy = "user")
    private List<SeatReservation> seatReservations = new ArrayList<>();

    /**
     * 비밀번호를 인증한다.
     * 
     * @param password 인증할 비밀번호
     * @param encoder 비밀번호 인코더
     * @return 엔티티의 비밀번호와 일치하면 true, 일치하지 않으면 false
     */
    public boolean authenticate(
            String password,
            PasswordEncoder encoder
    ) {
        return encoder.matches(password, this.password);
    }

    /**
     * 토큰을 갱신 한다.
     * 
     * @param token 토큰
     */
    public void updateToken(Token token) {
        this.token = token;
    }
}