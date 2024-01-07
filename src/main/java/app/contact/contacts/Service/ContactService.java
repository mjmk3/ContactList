package app.contact.contacts.Service;

import app.contact.contacts.Model.Contact;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author MJ Makki
 * @version 1.0
 * @license SkyLimits, LLC (<a href="https://www.skylimits.tech">SkyLimits, LLC</a>)
 * @email m.makki@skylimits.tech
 * @since long time ago
 */

@Service
public interface ContactService {
    Contact createContact(Contact contact);

    Page<Contact> getAllContacts(int page, int size);

    Contact getContact(String id);

    String uploadPhoto(String id, MultipartFile file);
}
