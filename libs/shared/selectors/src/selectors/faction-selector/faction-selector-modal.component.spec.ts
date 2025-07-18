import { TestBed, waitForAsync } from '@angular/core/testing';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { instance, mock } from 'ts-mockito';

import { FactionSelectorModalComponent } from './faction-selector-modal.component';
import { TranslateTestingModule } from '@keira/shared/test-utils';
import { FactionSearchService } from '../../search/faction-search.service';
import { MysqlQueryService, SqliteService } from '@keira/shared/db-layer';

describe('FactionSelectorModalComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FactionSelectorModalComponent, TranslateTestingModule],
      providers: [
        BsModalRef,
        { provide: SqliteService, useValue: instance(mock(SqliteService)) },
        { provide: MysqlQueryService, useValue: instance(mock(MysqlQueryService)) },
      ],
    }).compileComponents();
  }));

  function setup() {
    const searchService = TestBed.inject(FactionSearchService);
    searchService.query = '--mock query';

    const fixture = TestBed.createComponent(FactionSelectorModalComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    return { searchService, fixture, component };
  }

  it('should create', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });
});
