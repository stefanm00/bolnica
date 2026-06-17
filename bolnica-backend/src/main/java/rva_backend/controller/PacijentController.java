package rva_backend.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import rva_backend.models.Pacijent;
import rva_backend.service.DijagnozaService;
import rva_backend.service.OdeljenjeService;
import rva_backend.service.PacijentService;

@CrossOrigin
@RestController
public class PacijentController {

    @Autowired
    private PacijentService service;

    @Autowired
    private OdeljenjeService odeljenjeService;

    @Autowired
    private DijagnozaService dijagnozaService;

    @GetMapping("/pacijent")
    public ResponseEntity<List<Pacijent>> getAll() {
        return new ResponseEntity<>(service.getAll(), HttpStatus.OK);
    }

    @GetMapping("/pacijent/{id}")
    public ResponseEntity<Pacijent> getOne(@PathVariable Integer id) {
        Optional<Pacijent> pacijent = service.findById(id);

        if (pacijent.isPresent()) {
            return new ResponseEntity<>(pacijent.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/pacijent/ime/{ime}")
    public ResponseEntity<List<Pacijent>> getByIme(@PathVariable String ime) {
        return new ResponseEntity<>(service.findByIme(ime), HttpStatus.OK);
    }

    @GetMapping("/pacijent/prezime/{prezime}")
    public ResponseEntity<List<Pacijent>> getByPrezime(@PathVariable String prezime) {
        return new ResponseEntity<>(service.findByPrezime(prezime), HttpStatus.OK);
    }

    @PostMapping("/pacijent")
    public ResponseEntity<Pacijent> add(@RequestBody Pacijent pacijent) {

        if (pacijent.getOdeljenje() == null ||
            pacijent.getOdeljenje().getId() == null ||
            !odeljenjeService.existsById(pacijent.getOdeljenje().getId())) {

            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        if (pacijent.getDijagnoza() == null ||
            pacijent.getDijagnoza().getId() == null ||
            !dijagnozaService.existsById(pacijent.getDijagnoza().getId())) {

            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Pacijent saved = service.save(pacijent);
        URI location = URI.create("/pacijent/" + saved.getId());

        return ResponseEntity.created(location).body(saved);
    }

    @PutMapping("/pacijent/{id}")
    public ResponseEntity<Pacijent> update(@RequestBody Pacijent pacijent, @PathVariable Integer id) {

        if (!service.existsById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        if (pacijent.getOdeljenje() == null ||
            pacijent.getOdeljenje().getId() == null ||
            !odeljenjeService.existsById(pacijent.getOdeljenje().getId())) {

            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        if (pacijent.getDijagnoza() == null ||
            pacijent.getDijagnoza().getId() == null ||
            !dijagnozaService.existsById(pacijent.getDijagnoza().getId())) {

            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        pacijent.setId(id);

        return ResponseEntity.ok(service.save(pacijent));
    }

    @DeleteMapping("/pacijent/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        if (service.existsById(id)) {
            service.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}