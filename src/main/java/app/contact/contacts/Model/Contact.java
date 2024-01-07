package app.contact.contacts.Model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

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
public class Contact implements Serializable {

    @Id
    private Long id;
}
