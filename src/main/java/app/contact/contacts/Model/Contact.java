package app.contact.contacts.Model;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UuidGenerator;

import java.io.Serializable;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_DEFAULT;

/**
 * @author MJ Makki
 * @version 1.0
 * @license SkyLimits, LLC (<a href="https://www.skylimits.tech">SkyLimits, LLC</a>)
 * @email m.makki@skylimits.tech
 * @since long time ago
 */


@Entity
@Table(name = "contacts")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@JsonInclude(NON_DEFAULT)
public class Contact implements Serializable {

    @Id
    @UuidGenerator
    @Column(unique = true, updatable = false)
    private String id;
    private String name;
    private String title;
    private String phone;
    private String email;
    private String address;
    private String status;
    private String photoUrl;
}
