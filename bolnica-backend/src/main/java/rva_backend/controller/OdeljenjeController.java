package rva_backend.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import rva_backend.models.Odeljenje;
import rva_backend.service.BolnicaService;
import rva_backend.service.OdeljenjeService;

@CrossOrigin
@RestController
public class OdeljenjeController {

    @Autowired
    private OdeljenjeService service;

    @Autowired
    private BolnicaService bolnicaService;

    @GetMapping("/odeljenje")
    public ResponseEntity<List<Odeljenje>> getAll() {
        return new ResponseEntity<>(service.getAll(), HttpStatus.OK);
    }

    @GetMapping("/odeljenje/{id}")
    public ResponseEntity<Odeljenje> getOne(@PathVariable Integer id) {
        Optional<Odeljenje> odeljenje = service.findById(id);

        if (odeljenje.isPresent()) {
            return new ResponseEntity<>(odeljenje.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/odeljenje/naziv/{naziv}")
    public ResponseEntity<List<Odeljenje>> getByNaziv(@PathVariable String naziv) {
        return new ResponseEntity<>(service.findByNaziv(naziv), HttpStatus.OK);
    }

    @GetMapping("/odeljenje/lokacija/{lokacija}")
    public ResponseEntity<List<Odeljenje>> getByLokacija(@PathVariable String lokacija) {
        return new ResponseEntity<>(service.findByLokacija(lokacija), HttpStatus.OK);
    }

    @PostMapping("/odeljenje")
    public ResponseEntity<Odeljenje> add(@RequestBody Odeljenje odeljenje) {

        if (odeljenje.getBolnica() == null ||
            odeljenje.getBolnica().getId() == null ||
            !bolnicaService.existsById(odeljenje.getBolnica().getId())) {

            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Odeljenje saved = service.save(odeljenje);
        URI location = URI.create("/odeljenje/" + saved.getId());

        return ResponseEntity.created(location).body(saved);
    }

    @PutMapping("/odeljenje/{id}")
    public ResponseEntity<Odeljenje> update(@RequestBody Odeljenje odeljenje, @PathVariable Integer id) {

        if (!service.existsById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        if (odeljenje.getBolnica() == null ||
            odeljenje.getBolnica().getId() == null ||
            !bolnicaService.existsById(odeljenje.getBolnica().getId())) {

            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        odeljenje.setId(id);

        return ResponseEntity.ok(service.save(odeljenje));
    }

    @DeleteMapping("/odeljenje/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        if (service.existsById(id)) {
            service.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}