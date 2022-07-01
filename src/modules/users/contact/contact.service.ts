import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactService {
  constructor(
    @Inject('CONTACT_REPOSITORY')
    private readonly repository: Repository<Contact>,
  ) {}

  async create(createContactDto: CreateContactDto) {
    const contact = this.repository.create(createContactDto);
    return this.repository.save(contact);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id: id });
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const contactId = await this.repository.findOne({
      where: { user: { id: id } },
    });

    const contact = await this.repository.preload({
      id: contactId.id,
      ...updateContactDto,
    });

    if (!contact) {
      throw new NotFoundException(`Contact ${contactId.id}, not found`);
    }
    return this.repository.save(contact);
  }

  async remove(id: string) {
    const contact = await this.findOne(id);
    return this.repository.remove(contact);
  }
}
