package rva_backend.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import rva_backend.models.Bolnica;
import rva_backend.service.BolnicaService;

@CrossOrigin
@RestController
public class BolnicaController {

    @Autowired
    private BolnicaService service;

    @GetMapping("/bolnica")
    public ResponseEntity<List<Bolnica>> getAll() {
        return new ResponseEntity<>(service.getAll(), HttpStatus.OK);
    }

    @GetMapping("/bolnica/{id}")
    public ResponseEntity<Bolnica> getOne(@PathVariable Integer id) {
        Optional<Bolnica> bolnica = service.findById(id);

        if (bolnica.isPresent()) {
            return new ResponseEntity<>(bolnica.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/bolnica/naziv/{naziv}")
    public ResponseEntity<List<Bolnica>> getByNaziv(@PathVariable String naziv) {
        return new ResponseEntity<>(service.findByNaziv(naziv), HttpStatus.OK);
    }

    @PostMapping("/bolnica")
    public ResponseEntity<Bolnica> add(@RequestBody Bolnica bolnica) {
        Bolnica saved = service.save(bolnica);
        URI location = URI.create("/bolnica/" + saved.getId());
        return ResponseEntity.created(location).body(saved);
    }

    @PutMapping("/bolnica/{id}")
    public ResponseEntity<Bolnica> update(@RequestBody Bolnica bolnica, @PathVariable Integer id) {
        if (service.existsById(id)) {
            bolnica.setId(id);
            return ResponseEntity.ok(service.save(bolnica));
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/bolnica/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        if (service.existsById(id)) {
            service.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}