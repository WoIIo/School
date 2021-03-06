package domein;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import repository.SporterDao;
import repository.SporterDaoJpa;

public class SporterBeheerder {

	private SporterDao sporterDao;
	private List<Sporter> sportersLijst;

	// TODO OEF MAP extra attributen

	public SporterBeheerder() {
		sporterDao = new SporterDaoJpa();
		sportersLijst = sporterDao.findAll();
		// TODO OEF MAP
		// maakOverzichten();
	}

	public Collection<Sporter> getSportersLijst() {
		return Collections.unmodifiableList(sportersLijst);
	}

	// TODO OEF MAP extra methoden
//	public void maakOverzichten()
//	{
//		
//	}

	// VRAAG 6
	public Sporter geefEenSporterMetGegevenReductiebon(Reductiebon bon) {
		return sportersLijst.stream().filter(sporter -> sporter.getReductiebonLijst().contains(bon)).findAny().orElse(null);
	//findany als random, findfirst als eerst ; orelse omdat ook niks kan returnen en das ni leuk -> orElse(null)
	}
	// EXTRA vraag1 bij opstartASDIproject
	public List<Reductiebon> geefAlleReductiebonnenMetKortingsPercentageX(List<Integer> kortingspercentage) {		
		return sportersLijst.stream().map(Sporter::getReductiebonLijst).flatMap(Collection::stream).filter(b->kortingspercentage.contains(b.getPercentage())).collect(Collectors.toList());
		// -> stream<Sporter>														^pas stream toe op collection
		// -> stream<Collection<Reductiebon>>
		// ~>stream<Reductiebon> => collection ^ schrappen => collection naar stream dus stream<stream<>> => stream<bon> met flatmap
	}
	// EXTRA vraag2 bij opstartASDIproject
	public void verwijderAlleSportersMetReductiebonMetPercX(int perc) {
		sportersLijst.removeIf(s->s.getReductiebonLijst().stream().filter(bon->bon.getPercentage()==perc).count()!=0);
		//removeIF very nice																	^kijken of stream leeg is anders remove
	}

	public String geefSportersPerLidnr() {
		throw new UnsupportedOperationException();
	}

	public String geefSportersPerAantalReductiebonnen() {
		throw new UnsupportedOperationException();
	}
	
	
	

	// OEF GENERICS
	// methode geefAlleSleutelsWaarden


}
